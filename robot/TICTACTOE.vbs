' File: TICTACTOE.VBS      Date: 07-May-2021
'*******************************************************************************************

Dim GETP1, GETP2, GETP3
Dim PUTP1, PUTP2, PUTP3
DIM GO

'*******************************************************************************************
Function getPostionsFromName(name)
    Dim P1, P2, P3
    P1 = 1256
    P2 = 1257

    Select Case name
        Case "X1"
        P1 = 1256
        P2 = 1257

        Case "X2"
        P1 = 1258
        P2 = 1259

        Case "X3"
        P1 = 1260
        P2 = 1261

        Case "X4"
        P1 = 1262
        P2 = 1263

        Case "X5"
        P1 = 1264
        P2 = 1265

        Case "G1"
        P1 = 1266
        P2 = 1267

        Case "G2"
        P1 = 1268
        P2 = 1269

        Case "G3"
        P1 = 1270
        P2 = 1271

        Case "G4"
        P1 = 1272
        P2 = 1273

        Case "G5"
        P1 = 1274
        P2 = 1275

        Case "G6"
        P1 = 1276
        P2 = 1277

        Case "G7"
        P1 = 1278
        P2 = 1100
        Case "G8"
        P1 = 1101
        P2 = 1102

        Case "G9"
        P1 = 1103
        P2 = 1104

        Case "O1"
        P1 = 1105
        P2 = 1106

        Case "O2"
        P1 = 1107
        P2 = 1108

        Case "O3"
        P1 = 1109
        P2 = 1110

        Case "O4"
        P1 = 1111
        P2 = 1112

        Case "O5"
        P1 = 1113
        P2 = 1114

    End Select

    P3 = 1251

    getPostionsFromName = Array(P1, P2, P3)
End Function

'*******************************************************************************************
Function getRequest()
    Dim req
    Set req = CreateObject("MSXML2.XMLHTTP")
    req.open "GET", "http://hidden-spire-43960.herokuapp.com/pieces_news", False
    req.setRequestHeader "Cache-Control", "no-cache"
    req.send

    getRequest = req.responseText
End Function

Function postRequest()
    Dim req
    Set req = CreateObject("MSXML2.XMLHTTP")
    On Error Resume Next
    req.open "POST", "http://hidden-spire-43960.herokuapp.com/piece_changed", False
    req.setRequestHeader "Cache-Control", "no-cache"
    req.send

    postRequest = req.responseText
End Function

Sub FINISHMOV():
    GO = 0
    Dim postResponse
    postResponse = postRequest()
End Sub

Sub controller(status, source, target)
    If status = 1 Then
        Dim sourcePositions, targetPositions
        sourcePositions = getPostionsFromName(source)
        targetPositions = getPostionsFromName(target)

        GO = 1

        GETP1 = sourcePositions(0)
        GETP2 = sourcePositions(1)
        GETP3 = sourcePositions(2)

        PUTP1 = targetPositions(0)
        PUTP2 = targetPositions(1)
        PUTP3 = targetPositions(2)
    End If
End Sub

Sub START
    Dim response, splittedResponse, status, source, target

    response = getRequest()
    splittedResponse = Split(response,",")
    status = splittedResponse(0)
    source = splittedResponse(1)
    target = splittedResponse(2)

    Call controller(status, source, target)
End Sub
'*******************************************************************************************