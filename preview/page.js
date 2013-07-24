  context = BL.getContext();
  $('#description').text('Hello World: This is the preview page that gets used to preview your app. Click to view the display page of your app');
  $('#lightGroupId').text(context.lightGroupId);
  $('#lightGroupName').text(context.lightGroupName);
  $('#userId').text(context.userId);

  $('#container').on('click', function(){
    BL.displayApp(APP.appId);
  });
