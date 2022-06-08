var schedule=[];
var auditSchedule = function(rowEl) {
    var scheduletime = $(rowEl).attr("id");
    var past = moment(scheduletime ,"hha");
    var t = past.format('LTS');
    var prtime = moment().format('LTS');
    var textEl = $(rowEl).find("textarea");
    var a = moment(t,'hh:mm:ss a');
    var b = moment(prtime, 'hh:mm:ss a');
    if(a.isAfter(b,'hours'))
    {
        $(textEl).addClass("future"); 
    }
    else if(a.isBefore(b,'hours')){
        $(textEl).addClass("past");
    }
    else if(a.isSame(b,'hours')){
        $(textEl).addClass("present");  
    }    
  };
  var loadSchedule = function(){
    var getSchedule = localStorage.getItem("schedule");
    
    if (getSchedule!== null)
    {
        getSchedule = JSON.parse(getSchedule);
        for(var i=0;i<getSchedule.length;i++)
        {
            schedule[i]=getSchedule[i];
            var splitstr=schedule[i].split("-");
            $('#'+splitstr[0]).find("textarea").text(splitstr[1]);
        }
        
    }
    $(".row").each(function(index, el) {
        auditSchedule(el);
    });
};
