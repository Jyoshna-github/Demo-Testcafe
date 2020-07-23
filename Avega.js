import{Selector} from 'testcafe';

const hoverOption = Selector('a').withText('Vilka är');


const element = Selector('a').withText('Vill du jobba här?');
const element1 = Selector('a').withText('Se lediga tjänster');
const element2 = Selector('h2').withText('Vill du vara med och forma det digitala landskapet?');
const clickElement = Selector('a').withText('Ansök nu!');

const nameInput = Selector('#id_first_name');
const surnameInput = Selector('#id_last_name');
const emailInput = Selector('#id_email');

const clickElement1 = Selector('a').withText('Möt fler medarbetare');





fixture('Demo on avega')
.page('https://www.avegagroup.se/')

test('Testcase1', async t=>{
    await t
    .maximizeWindow()
    .hover(hoverOption)
    .takeScreenshot('fristScreenshot.png')
    .wait(2000)
  
    .click(element)
    .wait(1000)

    .click(element1)
    .wait(2000)

    .click(element2)
    .wait(2000)

    .click(clickElement)

//opening in other tab
    .typeText(nameInput, 'Dove')
    .typeText(surnameInput, 'Erikson')
    .typeText(emailInput, 'Dove@gmail.com')

    
    .navigateTo('https://www.avegagroup.se/lediga-jobb/22097/')
    .wait(2000)

    .click(clickElement1)
    .expect(Selector('h1').innerText).eql('Möt våra medarbetare')
           
     .wait(2000);
});