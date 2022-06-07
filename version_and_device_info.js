name: Version and device info
description: If you create milestones as versions y testruns as devices, copies this information to result/fail views.
I also use some custom fields
author: Yvette Hernández
version: 1.0
includes: ^(runs|tests)/view
excludes:

js:
$(document).ready(
    function() {
       $.subscribe('result_dialog.loaded', '', function(o) {
          $('#addResultComment_display').html(
           "version: " + uiscripts.context.milestone.name + "\n" +
           "device: " + uiscripts.context.run.name
          );
          $('#addResultVersion').val(
           uiscripts.context.milestone.name
          );
          var info = uiscripts.context.run.name.split("-");
          $('#custom_device').val(
           info[0].trim()
          );
          $('#custom_os_version').val(
           info[1].trim()
          );
       });
    }
);
