import { expect } from 'vitest';
import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbFormSearch } from './index.js';

CfpbFormSearch.init();

const mountSearch = (attributes) =>
  mount('cfpb-form-search', {
    attributes,
    html: '<ul hidden><li>Alerts</li></ul>',
  });

describe('<cfpb-form-search>', () => {
  afterEach(cleanup);

  it('keeps the search input defaults when no properties are set', async () => {
    const elm = await mountSearch();

    const input = elm.shadowRoot.querySelector('cfpb-form-search-input');

    expect(input.maxlength).toBe(75);
    expect(input.name).toBe('');
    expect(input.ariaLabelInput).toBe('Search input');
  });

  it('forwards name, placeholder and maxlength to the input', async () => {
    const elm = await mountSearch({
      name: 'searchQuery',
      placeholder: 'Search the site',
      maxlength: 75,
    });

    const input = elm.shadowRoot.querySelector('cfpb-form-search-input');

    expect(input.name).toBe('searchQuery');
    expect(input.placeholder).toBe('Search the site');
    expect(input.maxlength).toBe(75);

    const nativeInput = input.shadowRoot.querySelector('input');
    expect(nativeInput.name).toBe('searchQuery');
    expect(nativeInput.placeholder).toBe('Search the site');
    expect(nativeInput.maxLength).toBe(75);
  });

  it('forwards aria-label-input to the search input', async () => {
    const elm = await mountSearch({
      'aria-label-input': 'Search the design system',
    });

    const input = elm.shadowRoot.querySelector('cfpb-form-search-input');

    expect(input.ariaLabelInput).toBe('Search the design system');
    expect(
      input.shadowRoot.querySelector('input').getAttribute('aria-label'),
    ).toBe('Search the design system');
  });
});
