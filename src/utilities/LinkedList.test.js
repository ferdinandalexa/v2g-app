import { describe, expect, it, test } from 'vitest';
import { LinkedList } from './LinkedList';

test('Add first node in linked list', () => {
  const linkedList = new LinkedList();

  const nodes = [2];
  nodes.forEach(node => linkedList.add(node));

  expect(linkedList.getHead().data).eq(nodes.at(0));
  expect(linkedList.getTail().data).eq(nodes.at(0));
  expect(linkedList.getHead().data).eq(linkedList.getTail().data);
  expect(linkedList.getSize()).eq(nodes.length);
});

test('Add Second node in linked list', () => {
  const linkedList = new LinkedList();

  const nodes = [2, 5];
  nodes.forEach(node => linkedList.add(node));

  expect(linkedList.getHead().data).eq(nodes.at(0));
  expect(linkedList.getHead().next.data).eq(nodes.at(-1));
  expect(linkedList.getTail().data).eq(nodes.at(-1));
  expect(linkedList.getSize()).eq(nodes.length);
});

test('Add more two nodes in linked list', () => {
  const linkedList = new LinkedList();

  const nodes = [2, 5, 7, 9];

  nodes.forEach(node => linkedList.add(node));

  expect(linkedList.getHead().data).eq(nodes.at(0));
  expect(linkedList.getTail().data).eq(nodes.at(-1));
  expect(linkedList.getSize()).eq(nodes.length);
});

describe('Remove nodes', () => {
  it('Remove head', () => {
    const linkedList = new LinkedList();

    const nodes = [2, 5, 7, 9];
    nodes.forEach(node => linkedList.add(node));

    expect(linkedList.getHead().data).eq(nodes.at(0));

    linkedList.removeFrom(0);

    expect(linkedList.getHead().data).not.eq(nodes.at(0));
    expect(linkedList.getHead().data).eq(nodes.at(1));
  });

  it('Remove tail', () => {
    const linkedList = new LinkedList();

    const nodes = [2, 5, 7, 9];
    nodes.forEach(node => linkedList.add(node));

    expect(linkedList.getTail().data).eq(nodes.at(-1));

    linkedList.removeFrom(nodes.length - 1);

    expect(linkedList.getTail().data).not.eq(nodes.at(-1));
    expect(linkedList.getTail().data).eq(nodes.at(-2));
  });

  it('Remove second node', () => {
    const linkedList = new LinkedList();

    const nodes = [2, 5, 7, 9];
    nodes.forEach(node => linkedList.add(node));

    const initialSize = linkedList.getSize();
    const expectedSize = initialSize - 1;

    linkedList.removeFrom(1);

    expect(linkedList.getFrom(1).data).eq(nodes.at(2));
    expect(linkedList.getSize()).not.eq(initialSize);
    expect(linkedList.getSize()).eq(expectedSize);
  });
});
