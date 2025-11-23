import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    phone: '',
    equipment: '',
    duration: '',
    comment: ''
  });

  const equipment = [
    {
      id: 1,
      name: 'Автобетононасос 32м',
      image: 'https://cdn.poehali.dev/projects/81053f43-2fb0-4a6f-a8a7-23cb107e25df/files/4be32e0e-0a81-40ae-ad95-903161b3c1cc.jpg',
      reach: '32 метра',
      capacity: '90 м³/час',
      price: 'от 15 000 ₽/смена'
    },
    {
      id: 2,
      name: 'Автобетононасос 42м',
      image: 'https://cdn.poehali.dev/projects/81053f43-2fb0-4a6f-a8a7-23cb107e25df/files/4651430e-a483-4f2d-a181-ea3ad599b803.jpg',
      reach: '42 метра',
      capacity: '120 м³/час',
      price: 'от 20 000 ₽/смена'
    },
    {
      id: 3,
      name: 'Автобетононасос 52м',
      image: 'https://cdn.poehali.dev/projects/81053f43-2fb0-4a6f-a8a7-23cb107e25df/files/97552153-810e-4cae-b519-5245fcb1e42a.jpg',
      reach: '52 метра',
      capacity: '160 м³/час',
      price: 'от 25 000 ₽/смена'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Наш менеджер свяжется с вами в ближайшее время'
    });
    setFormData({
      company: '',
      contact: '',
      phone: '',
      equipment: '',
      duration: '',
      comment: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Truck" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary">БетонТехСервис</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#order" className="text-sm font-medium hover:text-primary transition-colors">Заявка</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Аренда автобетононасосов</h2>
            <p className="text-xl mb-8 text-gray-200">Профессиональная техника для строительных объектов любой сложности. Быстрая подача, надежность, выгодные условия.</p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Наши услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Calendar" size={40} className="text-primary mb-4" />
                <CardTitle>Аренда с экипажем</CardTitle>
                <CardDescription>Опытные операторы, полное обслуживание техники</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Clock" size={40} className="text-primary mb-4" />
                <CardTitle>Работа 24/7</CardTitle>
                <CardDescription>Круглосуточная подача техники на объект</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Shield" size={40} className="text-primary mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
                <CardDescription>Современная техника, регулярное ТО</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center">Каталог техники</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowUpCircle" size={18} className="text-primary" />
                      <span className="text-sm">Вылет стрелы: <strong>{item.reach}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" size={18} className="text-primary" />
                      <span className="text-sm">Производительность: <strong>{item.capacity}</strong></span>
                    </div>
                    <div className="pt-4 border-t">
                      <Badge variant="secondary" className="text-base px-3 py-1">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-3xl font-bold mb-12 text-center">Онлайн заявка на аренду</h3>
          <Card>
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Название организации *</Label>
                  <Input 
                    id="company" 
                    required 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact">Контактное лицо *</Label>
                    <Input 
                      id="contact" 
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="equipment">Требуемая техника *</Label>
                    <Input 
                      id="equipment" 
                      placeholder="Например: 42м"
                      required
                      value={formData.equipment}
                      onChange={(e) => setFormData({...formData, equipment: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Срок аренды *</Label>
                    <Input 
                      id="duration" 
                      placeholder="Количество смен"
                      required
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment" 
                    placeholder="Дополнительная информация об объекте"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">БетонТехСервис</h4>
              <p className="text-sm text-gray-300">Профессиональная аренда автобетононасосов для вашего строительства</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Email: info@betontech.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <p className="text-sm text-gray-300">Круглосуточно, без выходных</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;