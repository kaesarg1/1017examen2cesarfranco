  
//import shallowMount
import Footer from '@/components/Footer';
import { mount } from '@vue/test-utils';

describe("Tests Footer", () => {

  // 1. Test:  Footer instance de Vue? --- output 'passed'
  test('Footer instance de vue?', () => {
    const wrapper = mount(Footer, {
        propsData: {
          Footer:{
              name: "Footer"
          }
        }
    })

  // Header instance de Vue
  expect(wrapper.exists()).toBeTruthy();
  })

      // 2. Test: Footer Items ok? --- output 'passed'
    test('Footer items ok?', () => {
        const wrapper = mount(Footer, {
          computed: {
            getYearDate: function() {
              const date = new Date();
              return date.getFullYear();
            },
          }
        })

    // Header Items ok
    expect(wrapper.exists()).toBeTruthy();
    })



})

