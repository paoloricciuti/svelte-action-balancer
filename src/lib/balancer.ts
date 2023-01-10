type BalanceProps = { ratio?: number; enabled?: boolean; };

export function balancer(node: HTMLElement, { ratio = .5, enabled = true }: BalanceProps = {}) {
    // private variables to update from the update function to be accessible from the observer
    let _ratio = ratio;
    let _enabled = enabled;
    // initial display value in case enabled get's set to false
    const initialDisplay = getComputedStyle(node).display;
    // observer to rerun the balance every time the parent resize
    const observer = new ResizeObserver(() => {
        if (_enabled) {
            textBalance(_ratio);
        }
    });
    // function to balance the text
    const textBalance = (ratio: number) => {
        // utility function to update the maxWidth
        const update = (width: number) => (node.style.maxWidth = width + 'px');

        // reset the max width and set the display to block
        node.style.maxWidth = '';
        node.style.display = 'block';

        // Get the initial container size
        const width = node.clientWidth;
        const height = node.clientHeight;

        // Synchronously do binary search and calculate the layout
        let left = width / 2;
        let right = width;
        let middle;

        if (width) {
            while (left + 1 < right) {
                middle = ~~((left + right) / 2);
                update(middle);
                if (node.clientHeight === height) {
                    right = middle;
                } else {
                    left = middle;
                }
            }

            // Update the wrapper width
            update(right * ratio + width * (1 - ratio));
        }
    };
    // get the parent element of the node or the document body
    let closerNotContentsElement = node.parentElement ?? document.body;
    // get the closest parent element that does not have display contents (otherwise will not get updated from the observer)
    while (getComputedStyle(closerNotContentsElement).display === "contents") {
        closerNotContentsElement =
            closerNotContentsElement.parentElement ?? document.body;
    }
    observer.observe(closerNotContentsElement);
    return {
        update({ ratio = .5, enabled = true }: BalanceProps) {
            // update the local variables
            _ratio = ratio;
            _enabled = enabled;
            // if the update changed the enabled to false restore max-width and display else balance the text
            if (!enabled) {
                node.style.maxWidth = '';
                node.style.display = initialDisplay;
            } else {
                textBalance(ratio);
            }
        },
        destroy() {
            //on destroy disconnect the observer
            observer.disconnect();
        }
    };
}