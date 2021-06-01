Function getRequest()
	Dim req
	Set req = CreateObject("MSXML2.XMLHTTP")
	On Error Resume Next
	req.open "GET", "http://localhost:3000/pieces_news", False
	req.setRequestHeader "Cache-Control", "no-cache"
	req.send

	getRequest = req.responseText
End Function

Function postRequest()
	Dim req
	Set req = CreateObject("MSXML2.XMLHTTP")
	On Error Resume Next
	req.open "POST", "http://localhost:3000/piece_changed", False
	req.setRequestHeader "Cache-Control", "no-cache"
	req.send

	postRequest = req.responseText
End Function

Sub controller(status, source, target)
	If status = 1 Then
		'TODO: ADD HERE THE MOV

		Dim postResponse

		'WAIT FOR COMPLETE THE MOV
		postResponse = postRequest()
	End If
End Sub

Do
	Dim response, splittedResponse, status, source, target

	response = getRequest()
	splittedResponse = Split(response,",")
	status = splittedResponse(0)
	source = splittedResponse(1)
	target = splittedResponse(2)

	Call controller(status, source, target)

	WScript.Sleep 2000
Loop
