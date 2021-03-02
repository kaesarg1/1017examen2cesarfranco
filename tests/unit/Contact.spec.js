  
//import shallowMount
import Contact from '@/views/Contact';
import { mount } from '@vue/test-utils';

describe("Tests Contact", () => {

    // 1. Contact:  Contact instance de Vue? --- output 'passed'
    test('Contact instance de vue?', () => {
        const wrapper = mount(Contact, {
            propsData: {
                Contact:{
                name: "Contact"
            }
            }
        })

    // Contact instance de Vue
    expect(wrapper.exists()).toBeTruthy();
    })

    // 2. Test:  Contact items ok? --- output 'passed'
    test('Contact  items ok?', () => {
        const wrapper = mount(Contact, {
            propsData: {
                data() {
                    return {
                        categories: [
                            "Détails",
                            "Soumission",
                            "Rendezvous"
                        ]
                    }
                }
            }
        })

    // Contact items ok
    expect(wrapper.exists()).toBeTruthy();
    })

})


