  
//import shallowMount
import Header from '@/components/Header';
import { mount } from '@vue/test-utils';

describe("Tests Header", () => {

    // 1. Test:  Header instance de Vue? --- output 'passed'
    test('Header instance de vue?', () => {
      const wrapper = mount(Header, {
          propsData: {
            Header:{
                name: "Header"
            }
          }
      })

    // Header instance de Vue
    expect(wrapper.exists()).toBeTruthy();
    })

      // 2. Test:  Header menuItems ok? --- output 'passed'
    test('Header menuItems ok?', () => {
        const wrapper = mount(Header, {
            propsData: {
                menuItems: [
                    { 
                      id: 1,
                      name: "accueil",
                      path: "/Accueil",
                    },
                    { 
                      id: 2,
                      name: "projets",
                      path: "/Projets",
                    },
                    { 
                      id: 3,
                      name: "contact",
                      path: "/Contact",
                    }
                  ]
            }
        })

    // Header menuItems ok?
    expect(wrapper.exists()).toBeTruthy();
    })



})

