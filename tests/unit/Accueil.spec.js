  
//import shallowMount
import Accueil from '@/views/Accueil';
import { mount } from '@vue/test-utils';

describe("Tests Accueil", () => {

    // 1. Test:  Accueil instance de Vue? --- output 'passed'
    test('Accueil instance de vue?', () => {
        const wrapper = mount(Accueil, {
            propsData: {
               Accueil:{
                   name: "Accueil"
               }
            }
        })

    // Accueil instance de Vue
    expect(wrapper.exists()).toBeTruthy();
    })

   // 2. Test:  Accueil loadprofile? --- output 'passed'
   test('Accueil est une instance de vue?', () => {
    const wrapper = mount(Accueil, {
        propsData: {
           Accueil:{
            data() {
                return {
                    loadProfile: true,
                }
           }
        }
    }})

    // Accueil: loadprofile
    expect(wrapper.exists()).toBeTruthy();
    })

   // 3. Test: Accueil loggedin? --- output 'passed'
   test('Accueil est une instance de vue?', () => {
    const wrapper = mount(Accueil, {
        propsData: {
           Accueil:{
            created() {
                let loggedIn = false;
            
                if (loggedIn) {
                    this.loadProfile = true;
                    console.log(this.loadProfile);
                }
           }
        }
    }})
  // Accueil: loggedin
    expect(wrapper.exists()).toBeTruthy();
    })
})


