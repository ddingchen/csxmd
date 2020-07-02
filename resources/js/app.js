/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    data: {
        showResult: false,
        form: {
            zhiji: "08",
            bm6: 0,
            bm6zx: 0,
            bm6bs: 10000,
            bm36: 0,
            bm36zx: 0,
            bm36bs: 4100,
            bm3: 0,
            bm3zx: 0,
            bm3bs: 1500,
            huodonglv: 0
        },
        xishu1Map: {
            "4200": {
                "08": 0.07,
                "09": 0.07,
                "10": 0.07,
                D1: 0.07,
                D2: 0.07
            },
            max: {
                "08": 0.25,
                "09": 0.25,
                "10": 0.25,
                D1: 0.25,
                D2: 0.25
            }
        },
        xishu3Map: {
            "50400": {
                "08": 0.015,
                "09": 0.02,
                "10": 0.025,
                D1: 0.025,
                D2: 0.025
            },
            max: {
                "08": 0.045,
                "09": 0.05,
                "10": 0.055,
                D1: 0.055,
                D2: 0.055
            }
        }
    },
    mounted() {},
    computed: {
        gljt() {
            const fyc =
                this.form.bm6zx * this.form.bm6bs +
                this.form.bm36zx * this.form.bm36bs +
                this.form.bm3zx * this.form.bm3bs;
            return (
                fyc *
                1.15 *
                this.xishu1(fyc, this.form.zhiji) *
                this.xishu2(this.form.huodonglv)
            );
        },
        jljt() {
            const fyc =
                this.form.bm6 * this.form.bm6bs +
                this.form.bm36 * this.form.bm36bs +
                this.form.bm3 * this.form.bm3bs;
            return (
                fyc *
                1.15 *
                1.1 *
                this.xishu3(fyc, this.form.zhiji) *
                this.xishu4(this.huodonglv)
            );
        },
        gllyhj() {
            return this.gljt + this.jljt;
        }
    },
    methods: {
        xishu1(fyc, zhiji) {
            if (fyc < 4200) {
                return this.xishu1Map["4200"][zhiji];
            } else {
                return this.xishu1Map["max"][zhiji];
            }
        },
        xishu2(huodonglv) {
            if (huodonglv < 0.65) {
                return 1;
            } else {
                return 1.2;
            }
        },
        xishu3(fyc, zhiji) {
            if (fyc < 50400) {
                return this.xishu3Map["50400"][zhiji];
            } else {
                return this.xishu3Map["max"][zhiji];
            }
        },
        xishu4(huodonglv) {
            if (huodonglv < 0.55) {
                return 0.8;
            } else {
                return 1.2;
            }
        }
    }
});
