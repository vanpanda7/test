new Vue({
    el: "#app",
    data() {
        return {
            activeNames: "0",
            box8_img: "static/images/image-10.png",
        };
    },
    methods: {
        handleButtonClick(name) {
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
