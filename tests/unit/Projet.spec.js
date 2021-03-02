  
//import shallowMount
import Projet from '@/views/Projet';
import { mount } from '@vue/test-utils';

describe("Tests Projet", () => {

    // 1. Test:  Projet instance de Vue? --- output 'passed'
    test('Projet instance de vue?', () => {
        const wrapper = mount(Projet, {
            propsData: {
            Projet:{
                name: "Projet"
            }
            }
        })

    // Projet instance de Vue
    expect(wrapper.exists()).toBeTruthy();
    })

    // 2. Test:  Projet items ok? --- output 'passed'
    test('Projet  items ok?', () => {
        const wrapper = mount(Projet, {
            propsData: {
                data() {
                    return {
                      projets: [
                        "Dismortem website",
                        "Architecture Coherence website",
                        "IIAEJP website"
                        
                      ]
                    }
                  }
            }
        })

    // Projet  items ok
    expect(wrapper.exists()).toBeTruthy();
    })

})


