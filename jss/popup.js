

status="duminhphongadv"
var a=new Array(),n=""
a[1]='C';
a[2]='Ó';
a[3]=' ';
a[4]='P';
a[5]='H';
a[6]='Ả';
a[7]='I';
a[8]='!';
a[9]=' ';
a[10]='E';
a[11]='M';
a[12]=' ';
a[13]='C';
a[14]='Ũ';
a[15]='N';
a[16]='G';
a[17]=' ';
a[18]='T';
a[19]='H';
a[20]='Í';
a[21]='C';
a[22]='H';
a[23]=' ';
a[24]='A';
a[25]='N';
a[26]='H';
a[27]=' ';
a[28]='😊';


function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);

					$("#divResult").html("</br><h2>BIẾT SAO BIẾT KHÔNG ? <img src=''</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<I>Ừ THÌ LÚC NHỎ KHÔNG PHẢI MẸ VY CÓ DẶN LỚN LÊN SỐNG CẦN PHẢI CÓ <b>ĐỨC</b> CÒN GÌ ✨✨✨</I></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<i>VẬY NHA 🌹🌹🌹</i></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				