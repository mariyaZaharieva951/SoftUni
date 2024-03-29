import {html} from '../../node_modules/lit-html/lit-html.js';
import { setUserData } from '../util.js';
import {login} from '../api/data.js'

let loginTemplate = (onSubmit) => html `
<section id="login-page" class="login">
            <form @submit=${onSubmit} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`

export function loginPage(ctx) {
    //console.log(ctx)
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        
        ev.preventDefault();
        let form = ev.currentTarget;
        let formData = new FormData(ev.currentTarget);
        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        if(email == '' || password == '') {
            return alert('Please, fill all fields!')
        }
        await login(email,password);
        
        form.reset();
        ctx.updateUserNav();
        ctx.page.redirect('/');
    }
}