export const homepage=()=>{
const para = document.createElement("div");
para.innerHTML=`<div style="margin: auto; width:300px ;"class="center">
        <h1>Popeyes-Lousiana Kitchen</h1>
        <img src="./download.png" alt="">
        <div class="time">
            <h2>Timings</h2>
            <ul>
                <li>Monday:5am-1pm</li>
                <li>Tuesday:5am-1pm</li>
                <li>Wednesday:5am-1pm</li>
                <li>Thursday:5am-1pm</li>
                <li>Friday:5am-1pm</li>
            </ul>
        </div>
    </div>`
document.getElementById("content").appendChild(para);
}
