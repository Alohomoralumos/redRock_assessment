//想看
want.addEventListener("click",()=>{
    add_collection.style.display = "block";
})
none1.onclick=()=>{
    add_collection.style.display="none";
    form1.style.display = "block";
    empty1.innerHTML = '缩起 ▲';
    empty1.style.width = '40px';
}
none1.onmousedown=()=>{
    none1.src="叉号_click.png";
}
none1.onmouseup=()=>{
    none1.src="叉号.png";
}
empty1.onclick=()=>{
    if(empty1.innerHTML == '缩起 ▲') 
    {
        form1.style.display = "none";
        empty1.innerHTML = '高级(标签和短评) ▼';
        empty1.style.width = '108px';
    }
    else {
        form1.style.display = "block";
        empty1.innerHTML = '缩起 ▲';
        empty1.style.width = '40px';
    }
}
empty1.onmousedown =()=> {
    empty1.style.backgroundColor = "#FF6600";
    empty1.style.color = "#FFFFFF";
}
empty1.onmouseup =()=> {
    empty1.style.backgroundColor = "#FFFFFF";
    empty1.style.color = "#6666FF";
}
empty1.onmouseenter =()=> {
    empty1.style.backgroundColor = "#3366FF";
    empty1.style.color = "#FFFFFF";
}
empty1.onmouseleave =()=> {
    empty1.style.backgroundColor = "#FFFFFF";
    empty1.style.color = "#3366FF";
}
keep1.onclick=()=>{
    add_collection.style.display = "none";
    form1.style.display = "block";
    empty1.innerHTML = '缩起 ▲';
    empty1.style.width = '40px';
}
//看过
already.addEventListener("click",()=>{
    add_collection_.style.display = "block";
})
none2.onclick=()=>{
    add_collection_.style.display="none";
    form2.style.display = "block";
    empty2.innerHTML = '缩起 ▲';
    empty2.style.width = '40px';
}
none2.onmousedown=()=>{
    none2.src="叉号_click.png";
}
none2.onmouseup=()=>{
    none2.src="叉号.png";
}
empty2.onclick=()=>{
    if(empty2.innerHTML == '缩起 ▲') 
    {
        form2.style.display = "none";
        empty2.innerHTML = '高级(标签和短评) ▼';
        empty2.style.width = '108px';
    }
    else {
        form2.style.display = "block";
        empty2.innerHTML = '缩起 ▲';
        empty2.style.width = '40px';
    }
}
empty2.onmousedown =()=> {
    empty2.style.backgroundColor = "#FF6600";
    empty2.style.color = "#FFFFFF";
}
empty2.onmouseup =()=> {
    empty2.style.backgroundColor = "#FFFFFF";
    empty2.style.color = "#6666FF";
}
empty2.onmouseenter =()=> {
    empty2.style.backgroundColor = "#3366FF";
    empty2.style.color = "#FFFFFF";
}
empty2.onmouseleave =()=> {
    empty2.style.backgroundColor = "#FFFFFF";
    empty2.style.color = "#3366FF";
}
keep2.onclick=()=>{
    add_collection_.style.display = "none";
    form2.style.display = "block";
    empty2.innerHTML = '缩起 ▲';
    empty2.style.width = '40px';
}
let stars = document.querySelectorAll('[class="star"]');
let arr_stars = [0,0,0,0,0];
for(let i = 0; i < stars.length; i++)
{
    stars[i].onmouseenter=()=>
    {
        let j = i;
        if(j == 0) 
        {
            level.innerHTML="很差";
            for(let n = 0; n < 1; n++)
            {
                stars[n].src='star_choose.png';
            }
            for(let m = 5; m > 0; m--)
            {
                if(stars[m].src == 'star_not_choose.png')
                stars[m].src= 'star_choose.png';
            }
        }
        else if(j == 1) 
        {
            level.innerHTML="较差";
            for(let n = 0; n < 2; n++)
            {
                stars[n].src='star_choose.png';
            }
            for(let m = 5; m > 1; m--)
            {
                if(stars[m].src == 'star_choose.png')
                stars[m].src='star_not_choose.png';
            }
        }
        else if(j == 2) 
        {
            level.innerHTML="还行";
            for(let n = 0; n < 3; n++)
            {
                stars[n].src='star_choose.png';
            }
            for(let m = 5; m > 2; m--)
            {
                if(stars[m].src == 'star_choose.png')
                stars[m].src='star_not_choose.png';
            }
        }
        else if(j == 3) 
        {
            level.innerHTML="推荐";
            for(let n = 0; n < 4; n++)
            {
                stars[n].src='star_choose.png';
            }
            for(let m = 5; m > 3; m--)
            {
                if(stars[m].src == 'star_choose.png')
                stars[m].src='star_not_choose.png';
            }
        }
        else if(j == 4) 
        {
            level.innerHTML="力荐";
            for(let n = 0; n < 5; n++)
            {
                stars[n].src='star_choose.png';
            }
            for(let m = 5; m > 4; m--)
            {
                if(stars[m].src == 'star_choose.png')
                stars[m].src='star_not_choose.png';
            }
        }
    }
}
/*star_box.onmouseleave=()=>
{
    for(let i=0; i<stars.length; i++)
    {
        stars[i].src="star_not_choose.png";
    }
}*/
