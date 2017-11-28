Public Class Form1

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Me.Text = "Change Properties Through Coding"
        Me.BackColor = Color.Coral

        Me.Location = New Point(300, 300)
        Me.MaximizeBox = False

        Label1.Text = "This is my first Label"
        Label1.BorderStyle = BorderStyle.FixedSingle
        Label1.TextAlign = ContentAlignment.MiddleCenter
        Button1.Text = "My first Button"
        Button1.Size = New Size(200, 100)
        Button1.Image = Image.FromFile("C:\wamp64\www\eleni\paris.jpg")

        Button2.Text = "Click Here"

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        MsgBox("http://vb.net-informations.com")
    End Sub
End Class
