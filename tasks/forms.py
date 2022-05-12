rom django import forms

class NameForm(forms.Form):
    charValues = forms.CharField(max_length=100)
    intValues = forms.IntegerField()
    floatValues = forms.FloatField()
