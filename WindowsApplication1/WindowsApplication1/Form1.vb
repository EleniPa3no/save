Public Class Form1

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim nr1, nr2 As Integer
        nr1 = Val(TextBox1.Text)
        nr2 = Val(TextBox2.Text)
        If nr1 <> 0 And nr2 <> 0 Then
            If RadioButton1.Checked = True Then
                TextBox3.Text = (nr1 + nr2).ToString
            ElseIf RadioButton2.Checked = True Then
                TextBox3.Text = (nr1 - nr2).ToString
            ElseIf RadioButton3.Checked = True Then
                TextBox3.Text = (nr1 * nr2).ToString
            ElseIf RadioButton4.Checked = True Then
                TextBox3.Text = (nr1 / nr2).ToString
            End If
        Else
            MsgBox("Vlerat duhet te jene te ndryshme nga 0")
        End If
    End Sub
End Class
