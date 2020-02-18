import { Item } from './Item';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis arcu libero, vitae viverra neque dictum at. Pellentesque id nulla ullamcorper, congue augue non, dapibus massa. Mauris tempus dui sapien, a pulvinar lacus vulputate at. Quisque erat neque, euismod interdum dictum nec, ullamcorper semper quam. Donec eget molestie orci, vel mattis tortor. Nulla tincidunt ultrices consequat. Donec nec sem ac mi rutrum tempus. Mauris consectetur erat nunc, vehicula ultricies tellus gravida sed. Nullam vel eros eget metus suscipit rutrum a vitae est. Praesent id mi in felis porta commodo. Phasellus libero turpis, scelerisque ullamcorper tempus ac, consectetur in tortor. Fusce at finibus libero, quis posuere dui.';

export const testItems = [
  new Item('Columbus, OH', 1000000000, '02/17/2020', loremIpsum),
  new Item('Cleveland, OH', 1000000001, '02/17/2020', loremIpsum),
  new Item('Cincinati, OH', 1000000002, '02/17/2020', loremIpsum),
  new Item('Dayton, OH', 1000000003, '02/17/2020', loremIpsum)
];
