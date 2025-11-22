new Vue({
    el: "#app",
    data() {
        return {
            activeNames: "0",
            box8_img: "static/images/image-10.png",
            rotatedStates: {}, // 存储每个按钮的旋转状态
            collapseItems: [
                {
                    name: "1",
                    title: "Glass",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                },
                {
                    name: "2",
                    title: "Aluminum",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                },
                {
                    name: "3",
                    title: "Silicon",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                },
                {
                    name: "4",
                    title: "EVA",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
                },
                {
                    name: "5",
                    title: "Rubber",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
                },
                {
                    name: "6",
                    title: "Copper",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
                },
                {
                    name: "7",
                    title: "Silver",
                    contents: "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",
                },
            ]
        };
    },
    methods: {
        handleButtonClick(name) {
            // 切换旋转状态
            this.$set(this.rotatedStates, name, !this.rotatedStates[name]);
            if (this.activeNames === name) {
                this.activeNames = "";
            } else {
                const imglist = {
                    1: "static/images/image-10.png",
                    2: "static/images/image-11.png",
                    3: "static/images/image-12.png",
                    4: "static/images/image-13.png",
                    5: "static/images/image-14.png",
                    6: "static/images/image-15.png",
                    7: "static/images/image-16.png",
                };
                this.activeNames = name;
                this.box8_img = imglist[name];
            }
        },
    },
});
