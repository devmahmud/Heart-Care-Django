from .models import Doctor, Service


def footer_content(request):
    services = Service.objects.all()
    doctors = Doctor.objects.all()
    context = {
        'services': services,
        'doctors': doctors
    }
    return context
