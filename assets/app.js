import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import { registerVueControllerComponents } from '@symfony/ux-vue';
//registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/));

// If you prefer to lazy-load your Vue.js controller components, in order to keep the JavaScript bundle the smallest as possible,
// and improve performance, you can use the following line instead:
registerVueControllerComponents(require.context('./vue/controllers', true, /\.vue$/, 'lazy'));