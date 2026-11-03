import { expect } from 'vitest';
import { mount, cleanup } from '../../../../../test/plugins/element-helpers.js';
import { CfpbSelect } from './index.js';

CfpbSelect.init();

describe('<cfpb-select multiple>', () => {
  afterEach(cleanup);

  it('forwards the search input properties in multi-select mode', async () => {
    const elm = await mount('cfpb-select', {
      attributes: {
        multiple: true,
        name: 'searchQuery',
        placeholder: 'Filter options',
        maxlength: 25,
        validation: 'error',
      },
    });

    const input = elm.shadowRoot.querySelector('cfpb-form-search-input');

    expect(input.name).toBe('searchQuery');
    expect(input.placeholder).toBe('Filter options');
    expect(input.maxlength).toBe(25);
    expect(input.validation).toBe('error');
  });
});
