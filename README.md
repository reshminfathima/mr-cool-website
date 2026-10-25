# Mr Cool Mouth Freshener Website

A responsive static website built with plain HTML, CSS, and JavaScript.

## Pages

- `index.html` — homepage with the original Mr Cool video and an About Us section
- `shop.html` — Mr Cool Mouth Freshener product details, price, quantity selector, and purchase controls
- `contact.html` — contact information and a frontend-only form
- `enquiry.html` — wholesale and retail enquiry form

## Assets

- `assets/mr-cool-video.mp4` — homepage hero video
- `assets/mr-cool-logo.png` — Mr Cool logo
- `assets/mr-cool-product.png` — product visual used on the Shop page

## Run locally

Open `index.html` using Live Server in VS Code, or open it in a modern browser. The project uses relative paths.

## Update the product details

Edit `shop.html` to change the description, ingredients, or displayed price. The current price is ₹70. The quantity controls start at 1, and the + button adds the selected quantity to browser local storage and displays a short confirmation.

The Buy Now buttons open `https://rzp.io/rzp/DqYpkDNM` in a new tab. The supplied Razorpay link has a fixed payment amount; the selected quantity is saved in the browser but does not change the amount configured on that link.

## Update the About section

Edit the About Us section in `index.html`. Its ingredient marks are individual text icons styled in `style.css`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project folder.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Open the URL shown after GitHub Pages finishes publishing.

Contact and enquiry forms are frontend-only and do not send submissions. Connect them to a backend or form service before relying on them to receive messages.
