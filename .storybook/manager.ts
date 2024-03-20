import { addons } from '@storybook/addons';

// https://storybook.js.org/docs/configure/features-and-behavior
addons.setConfig({
    sidebar: {
        filters: {
            // Only show stories that are not marked as inProgress
            workInProgress: (item) => {
                return !item.tags?.includes('inProgress');
            },
        },
    },
});
