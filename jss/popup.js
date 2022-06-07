
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="Quốc Định"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ơ';
a[3]='n';
a[4]=' ';
a[5]='g';
a[6]='i';
a[7]='ả';
a[8]='n';
a[9]='!';
a[10]=' ';
a[11]='V';
a[12]='ì';
a[13]=' ';
a[14]='M';
a[15]='ầ';
a[16]='y';
a[17]=' ';
a[18]='Đ';
a[19]='ẹ';
a[20]='p';
a[21]=' ';
a[22]='T';
a[23]='r';
a[24]='a';
a[25]='i';
a[26]=' ';
a[27]='♥';
a[28]=' ';

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
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>AI CŨNG NÓI VẬY MÀ :D<img src='http://vozforums.com/images/smilies/Off/adore.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ ỪA THÌ TAO BIẾT TAO ĐẸP TRAI THẬT. NHƯNG THÔI TAO CŨNG ĐÀNH CHỊU THIỆT YÊU MẦY VẬY.♥ .<img src='http://vozforums.com/images/smilies/Off/angry.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>VẬY HÃY ĐỂ TRÁI TIM TAO THUỘC VỀ MẦY MỘT LẦN NHÉ! ♥ <img src='http://vozforums.com/images/smilies/Off/sure.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				