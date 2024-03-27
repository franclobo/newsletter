# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/franclobo/newsletter/assets/58642949/14dd6bf3-150d-4501-a276-0f3d16c6471f)

### Links

- Solution URL: [GitHub](https://github.com/franclobo/newsletter)
- Live Site URL: [Vercel](https://newsletter-ochre-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindui.com/) - For styles

### What I learned

```css
.custom-list {
  list-style-image: url(../public/assets/images/icon-list.svg);
  padding-left: 20px;
}
```
```js
{successModalVisible && (
          <section className="success-modal fixed top-0 left-0 mx-0 bg-white flex flex-col justify-center items-start gap-4 p-6 h-screen">
            <div className="flex flex-col justify-center items-start gap-5 modal-desktop">
              <Image src={Check} alt="Check icon" className="w-12 h-12" />
              <h2 className="text-2xl font-bold">Thanks for subscribing!</h2>
              <p>
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open it and
                click the button inside to confirm your subscription.
              </p>
              <div className="fixed bottom-0 left-0 p-4 w-full">
                <button
                  onClick={handleDismiss}
                  className="w-full rounded border dark-slate-grey px-8 py-3 text-sm font-medium text-white"
                >
                  Dismiss message
                </button>
              </div>
            </div>
          </section>
        )}
```
### Continued development

I want to configure the email sent to the user to confirm their subscription.

### Useful resources

- [Font optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - This helped me to optimize the fonts in my project.

## Author

- Website - [WebMinds Studio](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I would like to thank Frontend Mentor for the opportunity to practice my skills and improve my knowledge in web development and anybody who gives me feedback on my projects.

