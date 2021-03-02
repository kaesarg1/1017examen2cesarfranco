  
//import shallowMount
import MixinTranslate from '@/mixins/MixinTranslate';
import { mount } from '@vue/test-utils';

describe("Tests TRASLATIONS const", () => {

  // 1. Test:  Propieté Translate marche? --- output 'passed'
  test("Propieté Translate marche", () => {
    
    const Component = {
        render() {},
        title: 'translate',
        mixins: [MixinTranslate]
    }
    mount(Component)
    // Propieté Translate marche ok
    expect(document.title).toBe('translate')
  })
})

      

