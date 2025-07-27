// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// تشغيل صوت عند النقر على أي أيقونة
function playClickSound() {
    const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
    clickSound.play();
}

// إضافة صوت النقر لكل العناصر القابلة للنقر
document.addEventListener('DOMContentLoaded', function() {
    const clickableElements = document.querySelectorAll('a, button, .service-card, .team-member, .gallery-item, .color-option');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            playClickSound();
        });
    });
});

// تم إزالة شعار الموقع لتجنب مشاكل الجدول الزمني
// عرض شعار الموقع عند التحميل - تم إلغاؤه لإصلاح مشكلة الجدول الزمني



// إضافة أيقونة واتساب ثابتة
function addWhatsAppIcon() {
    const whatsappIcon = document.createElement('div');
    whatsappIcon.id = 'whatsapp-icon';
    whatsappIcon.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappIcon.style.position = 'fixed';
    whatsappIcon.style.bottom = '30px';
    whatsappIcon.style.left = '30px';
    whatsappIcon.style.width = '60px';
    whatsappIcon.style.height = '60px';
    whatsappIcon.style.backgroundColor = '#25D366';
    whatsappIcon.style.color = 'white';
    whatsappIcon.style.borderRadius = '50%';
    whatsappIcon.style.display = 'flex';
    whatsappIcon.style.justifyContent = 'center';
    whatsappIcon.style.alignItems = 'center';
    whatsappIcon.style.fontSize = '1.5rem';
    whatsappIcon.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
    whatsappIcon.style.cursor = 'pointer';
    whatsappIcon.style.zIndex = '9999';
    whatsappIcon.style.transition = 'all 0.3s';

    whatsappIcon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
    });

    whatsappIcon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
    });

    // تحويل الأيقونة إلى رابط واتساب مباشر
    const phoneNumber = '201273562300';
    const message = 'مرحباً، أريد استشارة هندسية من الاتحاد للتصميمات والاستشارات الهندسية';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // إنشاء رابط واتساب مباشر
    const whatsappLink = document.createElement('a');
    whatsappLink.href = whatsappUrl;
    whatsappLink.target = '_blank';
    whatsappLink.style.textDecoration = 'none';
    whatsappLink.style.color = 'inherit';
    
    // نقل محتوى الأيقونة إلى الرابط
    whatsappLink.innerHTML = whatsappIcon.innerHTML;
    whatsappLink.style.position = 'fixed';
    whatsappLink.style.bottom = '30px';
    whatsappLink.style.left = '30px';
    whatsappLink.style.width = '60px';
    whatsappLink.style.height = '60px';
    whatsappLink.style.backgroundColor = '#25D366';
    whatsappLink.style.color = 'white';
    whatsappLink.style.borderRadius = '50%';
    whatsappLink.style.display = 'flex';
    whatsappLink.style.justifyContent = 'center';
    whatsappLink.style.alignItems = 'center';
    whatsappLink.style.fontSize = '1.5rem';
    whatsappLink.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
    whatsappLink.style.cursor = 'pointer';
    whatsappLink.style.zIndex = '9999';
    whatsappLink.style.transition = 'all 0.3s';
    
    // إضافة تأثيرات التحويم
    whatsappLink.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
    });
    
    whatsappLink.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
    });
    
    // إضافة معالج النقر للتأكد من العمل
    whatsappLink.addEventListener('click', function(e) {
        console.log('Floating WhatsApp clicked - Opening URL:', this.href);
        console.log('Phone number:', phoneNumber);
        console.log('Message:', message);
    });
    
    // إزالة الأيقونة القديمة وإضافة الرابط الجديد
    document.body.removeChild(whatsappIcon);
    document.body.appendChild(whatsappLink);
    
    console.log('Floating WhatsApp - Created direct link:', whatsappUrl);
    console.log('Phone number:', phoneNumber);
    console.log('Message:', message);
    
    return whatsappLink;

    document.body.appendChild(whatsappIcon);

    return whatsappIcon;
}

// إعداد روابط واتساب الديناميكية للمهندسين
function setupDynamicWhatsAppLinks() {
    const teamMembers = document.querySelectorAll('.team-member');
    console.log('Found team members:', teamMembers.length);
    
    teamMembers.forEach((member, index) => {
        const whatsappLink = member.querySelector('a[href*="wa.me"]');
        console.log(`Team member ${index + 1} WhatsApp link:`, whatsappLink);
        
        if (whatsappLink) {
            const engineerName = member.querySelector('h4').textContent;
            const engineerRole = member.querySelector('p').textContent;
            
            console.log(`Engineer ${index + 1}:`, engineerName, '-', engineerRole);
            
            // إنشاء رسالة مخصصة باستخدام اسم المهندس الفعلي
            const message = `مرحباً، أريد استشارة هندسية من ${engineerName} - ${engineerRole}`;
            const phoneNumber = '201273562300';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // تحديث الرابط
            whatsappLink.href = whatsappUrl;
            
            console.log(`Engineer ${engineerName} - WhatsApp URL:`, whatsappUrl);
            console.log(`Engineer ${engineerName} - Phone:`, phoneNumber);
            console.log(`Engineer ${engineerName} - Message:`, message);
            
            // إضافة معالج النقر للتأكد من العمل
            whatsappLink.addEventListener('click', function(e) {
                console.log(`WhatsApp clicked for ${engineerName}`);
                console.log(`Opening URL: ${this.href}`);
                // الرابط سيفتح تلقائياً بسبب href
            });
        } else {
            console.error(`No WhatsApp link found for team member ${index + 1}`);
        }
    });
}

// تهيئة النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إضافة أيقونة واتساب
    addWhatsAppIcon();
    
    // إعداد روابط واتساب الديناميكية للمهندسين
    setupDynamicWhatsAppLinks();
    
    // إضافة معالج النموذج
    setupContactForm();
    
    // إعداد تأثيرات شريط التنقل
    setupNavbarEffects();
    
    // إعداد اكتشاف الصفحة النشطة
    setupActivePageDetection();
    
    // إعداد تأثيرات التمرير
    setupScrollAnimations();
    
    // اختبار روابط واتساب
    testWhatsAppLinks();
});

// اختبار روابط واتساب
function testWhatsAppLinks() {
    console.log('=== Testing WhatsApp Links ===');
    
    // اختبار روابط المهندسين
    const engineerLinks = document.querySelectorAll('.team-member a[href*="wa.me"]');
    console.log('Engineer WhatsApp links found:', engineerLinks.length);
    engineerLinks.forEach((link, index) => {
        console.log(`Engineer ${index + 1} WhatsApp URL:`, link.href);
        
        // اختبار فتح الرابط
        const testUrl = link.href;
        if (testUrl.includes('wa.me')) {
            console.log(`Testing URL ${index + 1}:`, testUrl);
            // يمكن إضافة اختبار إضافي هنا
        }
    });
    
    // اختبار نموذج الاتصال
    const contactForm = document.querySelector('#contactForm');
    console.log('Contact form found:', contactForm);
    
    // اختبار الأيقونة العائمة
    const floatingWhatsApp = document.querySelector('#whatsapp-icon');
    console.log('Floating WhatsApp icon found:', floatingWhatsApp);
    
    // اختبار تنسيق الرقم
    const testPhone1 = '201273562300';
    const testPhone2 = '01273562300';
    const testMessage = 'Test message';
    
    console.log('Test URL with country code:', `https://wa.me/${testPhone1}?text=${encodeURIComponent(testMessage)}`);
    console.log('Test URL without country code:', `https://wa.me/${testPhone2}?text=${encodeURIComponent(testMessage)}`);
    
    console.log('=== WhatsApp Links Test Complete ===');
}

// إعداد تأثيرات شريط التنقل
function setupNavbarEffects() {
    const header = document.querySelector('header');
    
    // تأثير التمرير
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // تأثير النقر على روابط التنقل
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // إزالة الفئة النشطة من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            // إضافة الفئة النشطة للرابط المحدد
            this.classList.add('active');
        });
    });
}

// إعداد اكتشاف الصفحة النشطة
function setupActivePageDetection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// إعداد تأثيرات التمرير للعناصر - تم تبسيطها لإصلاح مشكلة الجدول الزمني
function setupScrollAnimations() {
    // إزالة تأثيرات التمرير المعقدة لتجنب مشاكل الجدول الزمني
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}

// إعداد نموذج الاتصال - تم تبسيطه لضمان عمله
function setupContactForm() {
    console.log('Setting up contact form...');
    
    // انتظار تحميل الصفحة بالكامل
    setTimeout(() => {
        const contactForm = document.querySelector('#contactForm');
        console.log('Contact form found:', contactForm);
        
        if (contactForm) {
            // إزالة أي معالجات سابقة
            const newForm = contactForm.cloneNode(true);
            contactForm.parentNode.replaceChild(newForm, contactForm);
            
            // إضافة معالج النقر للزر
            const submitButton = newForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Submit button clicked!');
                    handleFormSubmission(newForm);
                });
            }
            
            // معالج النموذج
            newForm.addEventListener('submit', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Form submitted!');
                handleFormSubmission(this);
            });
            
            console.log('Contact form event listeners added successfully');
        } else {
            console.error('Contact form not found!');
        }
    }, 1000);
}

// دالة معالجة إرسال النموذج - محسنة
function handleFormSubmission(form) {
    console.log('Form submission started');
    
    try {
        // جمع بيانات النموذج
        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const phoneInput = form.querySelector('#phone');
        const messageInput = form.querySelector('#message');
        
        if (!nameInput || !emailInput || !messageInput) {
            console.error('Form inputs not found');
            alert('خطأ في النموذج. يرجى تحديث الصفحة والمحاولة مرة أخرى.');
            return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput.value.trim();
        
        console.log('Form data:', { name, email, phone, message });
        
        // التحقق من صحة البيانات
        if (!name) {
            alert('يرجى إدخال الاسم الكامل');
            nameInput.focus();
            return;
        }
        
        if (!email) {
            alert('يرجى إدخال البريد الإلكتروني');
            emailInput.focus();
            return;
        }
        
        if (!message) {
            alert('يرجى إدخال الرسالة');
            messageInput.focus();
            return;
        }
        
        // التحقق من صحة البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            emailInput.focus();
            return;
        }
        
        // إنشاء رسالة واتساب
        const whatsappMessage = createWhatsAppMessage(name, email, phone, message);
        console.log('WhatsApp message created:', whatsappMessage);
        
        // فتح واتساب مع الرسالة
        const phoneNumber = '201273562300';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        console.log('Opening WhatsApp URL:', whatsappUrl);
        
        // فتح واتساب في نافذة جديدة
        const whatsappWindow = window.open(whatsappUrl, '_blank');
        
        if (whatsappWindow) {
            // إظهار رسالة نجاح
            showSuccessMessage();
            
            // مسح النموذج
            form.reset();
            
            console.log('Form submitted successfully');
        } else {
            // إذا لم يتم فتح النافذة، فتح في نفس النافذة
            window.location.href = whatsappUrl;
        }
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.\n\nالتفاصيل: ' + error.message);
    }
}

// إنشاء رسالة واتساب منسقة ومحسنة
function createWhatsAppMessage(name, email, phone, message) {
    const currentDate = new Date().toLocaleDateString('ar-EG');
    const currentTime = new Date().toLocaleTimeString('ar-EG');
    
    return `مرحباً، أريد طلب استشارة هندسية من الاتحاد للتصميمات والاستشارات الهندسية

📋 *معلومات العميل:*
👤 الاسم: ${name}
📧 البريد الإلكتروني: ${email}
📱 رقم الهاتف: ${phone || 'غير محدد'}

📝 *تفاصيل الطلب:*
${message}

📅 التاريخ: ${currentDate}
⏰ الوقت: ${currentTime}

---
تم إرسال هذا الطلب من موقع الاتحاد للتصميمات والاستشارات الهندسية
https://united-engineering.com`;
}

// إظهار رسالة نجاح محسنة
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
        z-index: 10000;
        font-weight: bold;
        font-size: 1.1rem;
        max-width: 350px;
        border: 2px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        animation: slideIn 0.5s ease-out;
    `;
    
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle" style="font-size: 1.5rem; color: #fff;"></i>
            <div>
                <div style="font-weight: bold; margin-bottom: 5px;">تم إرسال طلبك بنجاح! ✅</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">سيتم فتح واتساب الآن لإكمال التواصل</div>
            </div>
        </div>
    `;
    
    // إضافة CSS للرسوم المتحركة
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    // إزالة الرسالة بعد 6 ثواني
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 500);
            }, 6000);
}

// دالة فتح واتساب مباشر
function openDirectWhatsApp() {
    const phoneNumber = '201273562300';
    const message = `مرحباً، أريد استشارة هندسية من الاتحاد للتصميمات والاستشارات الهندسية

أحتاج إلى:
- استشارة هندسية
- معلومات عن الخدمات
- عرض أسعار

يرجى التواصل معي في أقرب وقت ممكن.

شكراً لكم
---
تم إرسال هذا الطلب من موقع الاتحاد للتصميمات والاستشارات الهندسية`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    console.log('Opening direct WhatsApp:', whatsappUrl);
    
    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    // إظهار رسالة تأكيد
    showDirectWhatsAppMessage();
}

// رسالة تأكيد للواتساب المباشر
function showDirectWhatsAppMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
        z-index: 10000;
        font-weight: bold;
        font-size: 1.1rem;
        max-width: 350px;
        border: 2px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        animation: slideIn 0.5s ease-out;
    `;
    
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fab fa-whatsapp" style="font-size: 1.5rem; color: #fff;"></i>
            <div>
                <div style="font-weight: bold; margin-bottom: 5px;">تم فتح واتساب! 📱</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">يمكنك الآن التواصل مباشرة مع فريق العمل</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // إزالة الرسالة بعد 5 ثواني
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 500);
            }, 5000);
}

// دالة عامة لمعالجة النموذج - يمكن استدعاؤها مباشرة من HTML
function submitContactForm() {
    console.log('submitContactForm called!');
    const form = document.querySelector('#contactForm');
    if (form) {
        handleFormSubmission(form);
    } else {
        console.error('Form not found in submitContactForm');
    }
}

// دالة اختبار للتأكد من عمل النموذج
function testForm() {
    console.log('Testing form...');
    const form = document.querySelector('#contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    console.log('Form:', form);
    console.log('Submit button:', submitButton);
    
    if (submitButton) {
        submitButton.click();
    }
} 