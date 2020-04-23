function toggleDiv(id, rowNumber) {
    var buttonList = ["#EmergencyContacts", "#ReportingEmergencies", "#ActiveShooter", "#HostageSituation", "#Lockdown", "#ShelterInPlace", "#Fire", "#FireEvacuation", "#BombThreat", "#SuspiciousPackage", "#Hazardous", "#EmergencyNotifications", "#EvacuatingDisabled", "#MedicalEmergency", "StudentInDistress", "#Weather"];
    for(var i = 0; i < buttonList.length; i++) {
    if (($(buttonList[i]).is(':visible')) && (buttonList[i] != ('#' + id))) {
            $(buttonList[i]).slideUp(0);
        }
    }

    if (window.innerWidth <= 750) {
        $("#EmergencyContacts").insertAfter(".box2Row1");
        $("#ReportingEmergencies").insertAfter(".box2Row1");
        $("#Lockdown").insertAfter(".box2Row2");
        $("#ShelterInPlace").insertAfter(".box2Row2");
        $("#BombThreat").insertAfter(".box2Row3");
        $("#SuspiciousPackage").insertAfter(".box2Row3");
        $("#EvacuatingDisabled").insertAfter(".box2Row4");
        $("#MedicalEmergency").insertAfter(".box2Row4");

        $('#' + id).slideToggle("slow");
    }
    else {
        $('#' + id).insertAfter('.' + rowNumber);
        $('#' + id).slideToggle("slow");
    }
}


