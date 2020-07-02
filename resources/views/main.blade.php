<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <title>WeUI</title>
    <!-- 引入 WeUI CDN 链接 -->
    <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.3.0/weui.min.css" />
    <style>
        .page__hd {
            padding: 40px;
        }

        .page__title {
            text-align: left;
            font-size: 20px;
            font-weight: 400;
        }

        .page__desc {
            margin-top: 4px;
            text-align: left;
            font-size: 14px;
        }
    </style>
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body data-weui-theme="light">
    <div id="app">
        <div class="page" v-show="!showResult">
            <div class="weui-form">
                <div class="weui-form__text-area">
                    <h2 class="weui-form__title">创收小马达 测测测</h2>
                    <div class="weui-form__desc">新法聚薪表</div>
                </div>
                <div class="weui-form__control-area">
                    <div class="weui-cells__group weui-cells__group_form">
                        <div class="weui-cells__title">你好，请在方框内按要求输入：</div>
                        <div class="weui-cells weui-cells_form">
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">您的职级：</label></div>
                                <div class="weui-cell__bd">
                                    <select class="weui-select" v-model='form.zhiji'>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="D1">D1</option>
                                        <option value="D2">D2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">部门6000C以上人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm6"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">其中直辖组人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm6zx"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">部门3000C-6000C人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm36"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">其中直辖组人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm36zx"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">部门3000C以下人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm3"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">其中直辖组人力：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.bm3zx"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cell weui-cell_active">
                                <div class="weui-cell__hd"><label class="weui-label">活动率：</label></div>
                                <div class="weui-cell__bd">
                                    <input id="js_input" class="weui-input" type="number" v-model="form.huodonglv"
                                        pattern="[0-9]*" />
                                </div>
                            </div>
                            <div class="weui-cells__title">
                                温馨提示：<br />
                                1、本程序仅适用于平安寿险无锡中心支公司代理人在新法下的管理收入测算；<br />
                                2、运算过程中的人均FYC为20年1-6月各档位FYC的均值。
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weui-form__opr-area">
                    <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips"
                        @click="showResult=true">提交</a>
                </div>
            </div>
        </div>
        <div class="page" v-show="showResult">
            <div class="page__hd">
                <h1 class="page__title">您的管理收入测算结果：</h1>
            </div>
            <div class="page__bd">
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>管理津贴：</p>
                        </div>
                        <div class="weui-cell__ft">￥ <span v-text="gljt"></span></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>经理津贴：</p>
                        </div>
                        <div class="weui-cell__ft">￥ <span v-text="jljt"></span></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p>管理利益合计：</p>
                        </div>
                        <div class="weui-cell__ft">￥ <span v-text="gllyhj"></span></div>
                    </div>
                </div>
                <a class="weui-btn weui-btn_default" style="margin-top: 2em" href="javascript:"
                    @click="showResult=false">返回</a>
            </div>
        </div>
    </div>
</body>

</html>