import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    const newLocal = pipe.transform('chainedetest', 10);
    expect(newLocal).toBe('chainedete');
  });
});
