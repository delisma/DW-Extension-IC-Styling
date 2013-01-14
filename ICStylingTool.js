function canAcceptCommand()
{
  var retVal = false;
  if (dw.getDocumentDOM() && dw.getDocumentDOM().getParseMode() == 'html' && (dw.getFocus() == 'document' || dw.getFocus(true) == 'html' || dw.getFocus() == 'textView')){
    retVal = true;
  }
  return retVal;
}