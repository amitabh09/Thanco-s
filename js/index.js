const parent2Array = [
    { 'path': 'https://www.thancosnatural.com/wp-content/uploads/2017/12/quality-png.png', 'title': 'Quality', 'text': "Our products are so fresh that it is just manufactured to serve you. As we always know that the people who are health conscious and are also more conscious about the store, so as our outlets are well designed with state of the art looks and maintained hygienically to make you feel more comfort and royal." },
    { 'path': 'https://www.thancosnatural.com/wp-content/uploads/2017/12/awards-png.png', 'title': 'Awards', 'text': "Thanco's Naturals Ics Cream is the winner of Franchise Awards 2017. Judged by an independent panel of experts and supported by the Indian Franchise Association (IFA) & with Francorp India as Process advisors, Franchise Awards 2017 reward organizations that have shown outstanding business acumen, passion and achievement of franchise businesses across India." }
];

document.querySelector('.parent2').innerHTML = displayParent2(parent2Array);

function displayParent2(parent2Array) {
    let str = '';
    for (obj of parent2Array) {
        str += `<div><img src=${obj.path} alt=""><h3>${obj.title} </h3> ${obj.text} </div>`;
    }
    return str;
}

/*************************************************************************************************************/