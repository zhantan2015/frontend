<template>
    <div>
        <div class="root-box">
            <h2>生命细胞机</h2>
            <div class="board">
                <table cellspacing="0" cellpadding="0" border="1" bordercolor="dcdcdc">
                    <tr v-for="chessX in chessList">
                        <td v-for="chess in chessX" width="8" height="8" :bgcolor="chess[1]?'green':'white'"></td>
                    </tr>
                </table>
            </div>
            <div class="btn-box">
                <span class="btn btn-success" @click="refresh">刷新</span>
                <span class="btn btn-success" @click="begin" v-text="stop?'开始':'加速'"></span>
                <span class="btn btn-success" @click="stop=true">停止</span>
            </div>
            <div class="tips">
                <p>规则如下：</p>
                <ul>
                    <li>开始前，每个空格均有50%几率产生原始细胞。</li>
                    <li>当周围的存活细胞低于2个时，该细胞变成死亡状态。（模拟生命数量稀少）</li>
                    <li>当周围有2个或3个存活细胞时，该细胞保持存活。</li>
                    <li>当周围有超过3个存活细胞时，该细胞将会死亡。（模拟生命数量过多）</li>
                    <li>当一个空格周围有三个存活细胞时，该空格生成一个新细胞。（模拟繁殖）</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Game",
        data() {
            return {
                chessList: [],
                stop: true,
                beginBtn: this.stop ? '加速' : '开始'
            };
        },
        methods: {
            refresh() {
                this.chessList.forEach((item, Y, arrY) => {
                    item.forEach((item, X, arrX) => {
                        arrX[X] = [0, Math.random() > 0.495];
                    });
                    this.$set(this.chessList, Y, arrY[Y])//显式通知vue数据变更
                })
            },
            begin() {
                this.stop = false;
                let t = setInterval(() => {
                    if (this.stop)
                        clearInterval(t);
                    this.calc();
                    this.evo()
                }, 1000);
            },
            calc() {
                this.chessList.forEach((item, Y, arrY) => {
                    item.forEach((item, X, arrX) => {
                        let l = 0;
                        if (Y === 0) {
                            if (arrY[1][X][1]) l++;
                            if (X === 0) {
                                if (arrX[1][1]) l++;
                                if (arrY[1][1][1]) l++;
                            } else if (X === 63) {
                                if (arrX[62][1]) l++;
                                if (arrY[1][62][1]) l++;
                            } else {
                                if (arrX[X - 1][1]) l++;
                                if (arrX[X + 1][1]) l++;
                                if (arrY[1][X - 1][1]) l++;
                                if (arrY[1][X + 1][1]) l++;
                            }
                        } else if (Y === 63) {
                            if (arrY[62][X][1]) l++;
                            if (X === 0) {
                                if (arrX[1][1]) l++;
                                if (arrY[62][1][1]) l++
                            } else if (X === 63) {
                                if (arrX[62][1]) l++;
                                if (arrY[62][62][1]) l++
                            } else {
                                if (arrY[62][X - 1][1]) l++;
                                if (arrY[62][X + 1][1]) l++;
                                if (arrX[X - 1][1]) l++;
                                if (arrX[X + 1][1]) l++;
                            }
                        } else {
                            if (arrY[Y - 1][X][1]) l++;
                            if (arrY[Y + 1][X][1]) l++;
                            if (X === 0) {
                                if (arrY[Y - 1][1][1]) l++;
                                if (arrX[1][1]) l++;
                                if (arrY[Y + 1][1][1]) l++;
                            } else if (X === 63) {
                                if (arrY[Y - 1][62][1]) l++;
                                if (arrX[62][1]) l++;
                                if (arrY[Y + 1][62][1]) l++;
                            } else {
                                if (arrY[Y - 1][X - 1][1]) l++;
                                if (arrY[Y - 1][X + 1][1]) l++;
                                if (arrX[X - 1][1]) l++;
                                if (arrX[X + 1][1]) l++;
                                if (arrY[Y + 1][X - 1][1]) l++;
                                if (arrY[Y + 1][X + 1][1]) l++;
                            }
                        }
                        arrX[X][0] = l;
                    });
                    this.$set(this.chessList, Y, arrY[Y])//显式通知vue数据变更
                })
            },
            evo() {
                this.chessList.forEach((item, Y, arrY) => {
                    item.forEach((item, X, arrX) => {
                        let l = item[0];
                        if (l < 2) arrX[X][1] = false;
                        else if (l === 3) arrX[X][1] = true;
                        else if (l > 3) arrX[X][1] = false;
                    });
                    this.$set(this.chessList, Y, arrY[Y])//显式通知vue数据变更
                })
            }
        },
        created() {
            for (let y = 0; y < 64; y++) {
                let t = [];
                for (let x = 0; x < 64; x++) {
                    t[x] = [0, Math.random() > 0.495]
                }
                this.chessList[y] = t
            }
            this.calc()
        }
    }
</script>

<style scoped lang="less">
    .root-box {
        width: 100%;

        h2 {
            color: #eee;
            text-align: center;
        }

        .board {
            margin: 2em;

            td {
                width: 8px;
                height: 8px;
            }
        }

        .btn-box {
            margin-left: 2em;
        }

        .tips {
            margin: 2em;
            color: #eed;

            ul {
                padding-left: 2em;
                list-style-type: armenian;
            }
        }
    }
</style>