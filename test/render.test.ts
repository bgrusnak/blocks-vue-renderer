import { mount } from '@vue/test-utils';
import RenderBlocks from '../src'; 
const noSpaces = (str) => str.replace(/^\s+|\s+$/gm, '').replace(/\n/g, '');
const content = [
  {
    type: 'heading',
    level: 1,
    children: [
      {
        text: 'Terms and conditions',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Here you can see ',
        type: 'text',
      },
      {
        text: 'our',
        type: 'text',
        strikethrough: true,
      },
      {
        text: ' ',
        type: 'text',
      },
      {
        bold: true,
        text: 'terms',
        type: 'text',
      },
      {
        text: ' ',
        type: 'text',
      },
      {
        text: 'and',
        type: 'text',
        italic: true,
      },
      {
        text: ' ',
        type: 'text',
      },
      {
        text: 'conditions',
        type: 'text',
        underline: true,
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        code: true,
        text: 'code is here',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        type: 'text',
      },
      {
        url: 'https://moon.io',
        type: 'link',
        children: [
          {
            text: 'To the moon',
            type: 'text',
          },
        ],
      },
      {
        text: '',
        type: 'text',
      },
    ],
  },
  {
    type: 'list',
    format: 'unordered',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'once',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'upon',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'a',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'time',
            type: 'text',
          },
        ],
      },
    ],
  },
  {
    type: 'list',
    format: 'ordered',
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'fir',
            type: 'text',
          },
          {
            text: 'sst',
            type: 'text',
            italic: true,
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'second',
            type: 'text',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'thi',
            type: 'text',
          },
          {
            bold: true,
            text: 'r',
            type: 'text',
          },
          {
            text: 'd',
            type: 'text',
          },
        ],
      },
    ],
  },
  ,
];
test('matches html', () => {
  const wrapper = mount(RenderBlocks, {
    props: {
      content,
    },
  });
  expect(noSpaces(wrapper.html())).toMatch(
    noSpaces(`<h1>
  <el>Terms and conditions</el>
</h1>
<p>
  <el>Here you can see </el><s>
    <el>our</el>
  </s>
  <el> </el><strong><el>terms</el></strong>
  <el> </el><i>
    <el>and</el>
  </i>
  <el> </el><u>
    <el>conditions</el>
  </u>
  </p>
  <p><code><el>code is here</el></code></p>
  <p>
  <el></el><a href=\"https://moon.io\">
    <el>To the moon</el>
  </a>
  <el></el>
  </p>
  <ul>
  <li>
    <el>once</el>
  </li>
  <li>
    <el>upon</el>
  </li>
  <li>
    <el>a</el>
  </li>
  <li>
    <el>time</el>
  </li>
  </ul>
  <ol>
  <li>
    <el>fir</el><i>
    <el>sst</el>
    </i>
  </li>
  <li>
      <el>second</el>
  </li>
  <li>
    <el>thi</el><strong><el>r</el></strong>
    <el>d</el>
  </li>
  </ol>
  `)
  );
});
