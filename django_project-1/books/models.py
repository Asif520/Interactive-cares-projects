from django.db import models
from django.urls import reverse

class Book(models.Model):
    FICTION = 'Fiction'
    SCI_FI = 'Sci-Fi'
    NON_FICTION = 'Non-Fiction'
    MYSTERY = 'Mystery'
    ROMANCE = 'Romance'
    OTHERS = 'Others'

    CATEGORY_CHOICES = [
        (FICTION, 'Fiction'),
        (SCI_FI, 'Sci-Fi'),
        (NON_FICTION, 'Non-Fiction'),
        (MYSTERY, 'Mystery'),
        (ROMANCE, 'Romance'),
        (OTHERS, 'Others'),
    ]

    STATUS_CHOICES = [
        ('available', 'Available'),
        ('borrowed', 'Borrowed'),
    ]

    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default=FICTION
    )
    published_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='available'
    )

    def __str__(self):
        return f"{self.title} - {self.author}"

    def get_absolute_url(self):
        return reverse('book_detail', kwargs={'pk': self.pk})