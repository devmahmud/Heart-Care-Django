from django.db import models
from hospital.models import Doctor
from django.utils import timezone


class Appointment(models.Model):
    time_choices = (
        ('morning', "Morning"),
        ('evening', "Evening")
    )
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    doctor = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name='appointments')
    date = models.DateField(default=timezone.now)
    time = models.CharField(choices=time_choices, max_length=10)
    note = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name}-{self.doctor.name}"
