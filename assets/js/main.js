
// tạo biến $ $$ để viết tắt
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// lấy các class có tên giống nhaunhau
const tabs = $$(".tab__item")
const contents = $$(".tab-content-box")

//lấy tab active
const tabActive =  $(".tab__item.active")

//lấy line
const line =  $(".tab__category .line")

// bản chất element là 1 object có thuộc tính và phương thức offsetLeft vị trí bên trái offsetWidth là chiều ngang của thẻ có class active
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'



// dùng để lập qua lắng nghe sự kiện onclick
tabs.forEach((tab, index) => {
    // lấy content có thứ tự đúng với danh mục
    const content = contents[index]

    tab.onclick = function() {
        // xóa class active khi click để class active ko bị hiện trên nhiều thẻ
        $(".tab__item.active").classList.remove('active')
        $(".tab-content-box.active").classList.remove('active')

        // bản chất element là 1 object có thuộc tính và phương thức offsetLeft vị trí bên trái offsetWidth là chiều ngang
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        // add class active vào thẻ đc lick
        this.classList.add('active')
        content.classList.add('active')
    }
});