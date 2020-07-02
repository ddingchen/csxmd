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
            bm36bs: 4500,
            bm3: 0,
            bm3zx: 0,
            bm3bs: 2000,
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
            "7000": {
                "08": 0.11,
                "09": 0.11,
                "10": 0.11,
                D1: 0.11,
                D2: 0.11
            },
            "15000": {
                "08": 0.15,
                "09": 0.15,
                "10": 0.15,
                D1: 0.15,
                D2: 0.15
            },
            "30000": {
                "08": 0.19,
                "09": 0.19,
                "10": 0.19,
                D1: 0.19,
                D2: 0.19
            },
            "50000": {
                "08": 0.22,
                "09": 0.22,
                "10": 0.22,
                D1: 0.22,
                D2: 0.22
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
            "6300": {
                "08": 0.025,
                "09": 0.03,
                "10": 0.035,
                D1: 0.035,
                D2: 0.035
            },
            "110000": {
                "08": 0.03,
                "09": 0.035,
                "10": 0.04,
                D1: 0.04,
                D2: 0.04
            },
            "200000": {
                "08": 0.035,
                "09": 0.04,
                "10": 0.045,
                D1: 0.045,
                D2: 0.045
            },
            "300000": {
                "08": 0.04,
                "09": 0.045,
                "10": 0.05,
                D1: 0.05,
                D2: 0.05
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
        endImg() {
            const id = Math.round(Math.random() * 10) % 5;
            return `http://mobilecctokshow.oss-cn-qingdao.aliyuncs.com/SunHouse/Temp/${id}.gif`;
        },
        gljt() {
            const fyc =
                this.form.bm6zx * this.form.bm6bs +
                this.form.bm36zx * this.form.bm36bs +
                this.form.bm3zx * this.form.bm3bs;
            return (
                Math.round(
                    fyc *
                        1.15 *
                        this.xishu1(fyc, this.form.zhiji) *
                        this.xishu2(this.form.huodonglv / 100) *
                        100
                ) / 100
            );
        },
        jljt() {
            const fyc =
                this.form.bm6 * this.form.bm6bs +
                this.form.bm36 * this.form.bm36bs +
                this.form.bm3 * this.form.bm3bs;
            return (
                Math.round(
                    fyc *
                        1.15 *
                        1.1 *
                        this.xishu3(fyc, this.form.zhiji) *
                        this.xishu4(this.huodonglv / 100) *
                        100
                ) / 100
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
            } else if (fyc < 7000) {
                return this.xishu1Map["7000"][zhiji];
            } else if (fyc < 15000) {
                return this.xishu1Map["15000"][zhiji];
            } else if (fyc < 30000) {
                return this.xishu1Map["30000"][zhiji];
            } else if (fyc < 50000) {
                return this.xishu1Map["50000"][zhiji];
            } else {
                return this.xishu1Map["max"][zhiji];
            }
        },
        xishu2(huodonglv) {
            if (huodonglv < 0.65) {
                return 1;
            } else if (huodonglv < 0.7) {
                return 1.1;
            } else if (huodonglv < 0.75) {
                return 1.15;
            } else {
                return 1.2;
            }
        },
        xishu3(fyc, zhiji) {
            if (fyc < 50400) {
                return this.xishu3Map["50400"][zhiji];
            } else if (fyc < 63000) {
                return this.xishu3Map["63000"][zhiji];
            } else if (fyc < 110000) {
                return this.xishu3Map["110000"][zhiji];
            } else if (fyc < 200000) {
                return this.xishu3Map["200000"][zhiji];
            } else if (fyc < 300000) {
                return this.xishu3Map["300000"][zhiji];
            } else {
                return this.xishu3Map["max"][zhiji];
            }
        },
        xishu4(huodonglv) {
            if (huodonglv < 0.55) {
                return 0.8;
            } else if (huodonglv < 0.6) {
                return 0.9;
            } else if (huodonglv < 0.65) {
                return 0.95;
            } else if (huodonglv < 0.7) {
                return 1;
            } else if (huodonglv < 0.75) {
                return 1.1;
            } else {
                return 1.2;
            }
        }
    }
});
