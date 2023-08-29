$(document).ready(function () {
   
    // var linesid = 2
    $("#_lineid").val(0)
    //var add = '<tr id="addlines" class="checked"><td><input type="text" class="form-control" id="_item" required/></td><td><input type="text"  class="form-control" id="_description" /></td><td><input type="number" class="form-control" id="_qty" required/></td><td><input type="number"  class="form-control" id="_rate" required/></td><td><input type="number" class="form-control" id="_taxrate" required/></td><td><input type="number" class="form-control" id="_grossamount" disabled/></td><td><input type="number" class="form-control" id="_netamount" disabled/></td></tr>'
   //  var lineNo = 1
    $("#addBtn").click(function (e) {
        var rowCount = $('#item_table tr').length - 1 
        console.log(rowCount)
        tableBody = $("table tbody");
        tableBody.append('<tr id="addlines' + rowCount + '"class="checked"> <td><input type="text" class="form-control" id="' + rowCount + '_lineid" readonly name="' + rowCount + 'lineid"></td><td><input type="text" class="form-control" id="' + rowCount + '_item" required name="' + rowCount + 'item"></td><td><input type="text" class="form-control" id="' + rowCount + '_description" name="' + rowCount + 'description" ></td><td><input type="number" class="form-control" id="' + rowCount + '_qty" required name="' + rowCount + 'qty"></td><td><input type="number" class="form-control" id="' + rowCount + '_rate" required name="' + rowCount + 'rate"></td><td><input type="number" class="form-control" id="' + rowCount + '_taxrate" required name="' + rowCount + 'taxrate"></td><td><input type="number" class="form-control" step=".01" id="' + rowCount + '_grossamount" readonly name="' + rowCount + 'grossamount"></td><td><input type="number" class="form-control" step=".01" id="' + rowCount + '_netamount" readonly name="' + rowCount + 'netamount"></td></tr>');
       // tableBody.append('<tr id="addlines' + lineNo + '"class="checked"><td><input type="text" class="form-control" id="' + lineNo + '_item" required/></td><td><input type="text"  class="form-control" id="' + lineNo + '_description" /></td><td><input type="number" class="form-control" id="' + lineNo + '_qty" required/></td><td><input type="number"  class="form-control" id="' + lineNo + '_rate" required/></td><td><input type="number" class="form-control" id="' + lineNo + '_taxrate" required/></td><td><input type="number" class="form-control" id="' + lineNo + '_grossamount" disabled/></td><td><input type="number" class="form-control" id="' + lineNo + '_netamount" disabled/></td></tr>');
       $("#"+ rowCount +"_lineid").val(parseInt(rowCount))
       e.preventDefault();// this prevents the submit
        // lineNo++;
        // linesid++
        
    });
})
$(document).ready(function () {
    $("#removeBtn").click(function (e) {
        $('.checked').last().remove();
        //  $('#form').submit();
        e.preventDefault();// this prevents the submit
    });
})

//      $("#_rate1").css("border", "3px solid red");

$("#item_table").on("change", function (event) {
    var elementid = event.target.id
    var splitid = elementid.split("_")[0]
    var rate = $("#"+splitid+"_rate").val();
   // console.log(rate)
    var qty = $("#"+splitid+"_qty").val();
    var netamount = parseFloat(rate) * parseFloat(qty)
    var taxrate = $("#"+splitid+"_taxrate").val();
    var taxnumber = parseFloat(taxrate) / 100
    var taxamount = netamount * taxnumber
    var finalamount = netamount + taxamount

    if (rate != '' && qty != '') {
        $("#"+splitid+"_netamount").val(qty * rate)

    }
    if (rate != '' && qty != '' && taxrate != '') {
        $("#"+splitid+"_grossamount").val(finalamount)
    }
});

