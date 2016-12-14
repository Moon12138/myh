$(function(){
	$.ajax({
		url:'wad/recommand/6',
		method:'get',
		dataType:'json',
		success:function(data,status,xhr){
			console.log(data);
			
			for(var i=0;i<6;i++){
				$('#name'+i).text(data[i].name);
				$('#alias'+i).text(data[i].alias);
				$('#taste'+i).text(data[i].taste);
			$('#area'+i).text(data[i].area);
			$('#propose'+i).text(data[i].propose);
			$('#intro'+i).text(data[i].history);
				$('#pic'+i).attr('src',data[i].pic_1);
				$('#a'+i).attr('href','wad.html?id='+data[i].id);
				}
		},
		error:function(xhr,status,data){
			console.log(data);
			alert('服务器错误');
		}
		
		})
	})