from django import forms
from .models import Book

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'author', 'description', 'category', 'published_date', 'status']
        widgets = {
            'published_date': forms.DateInput(attrs={'type': 'date'}),
            'description': forms.Textarea(attrs={'rows': 4}),
        }
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # Make all fields except these two read-only / disabled
        editable_fields = {'author', 'status'}   # ← CHANGE THESE TWO to the ones you want editable
        
        for field_name in self.fields:
            if field_name not in editable_fields:
                self.fields[field_name].disabled = True