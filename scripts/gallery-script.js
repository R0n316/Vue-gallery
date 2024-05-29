new Vue({
        el:'#app',
        data: {
            images: [
                {
                    src: 'images/arhiz.jpg',
                    alt: 'Архыз',
                    title: 'Архыз',
                    liked:false
                },
                {
                    src: 'images/o-slovo-3.jpg',
                    alt: 'река Снежная',
                    title: 'река Снежная',
                    liked:true
                },
                {
                    src: 'images/ivanovo.jpg',
                    alt: 'Иваново',
                    title: 'Иваново',
                    liked:false
                },
                {
                    src: 'images/zub-sufruju.jpg',
                    alt: 'Зуб суфруджу',
                    title: 'Зуб суфруджу',
                    liked:true
                },
                {
                    src: 'images/hibini.jpg',
                    alt: 'Хибины',
                    title: 'Хибины',
                    liked:false
                },
                {
                    src: 'images/peski.jpg',
                    alt: 'Чарские пески',
                    title: 'Чарские пески',
                    liked:true
                }
            ],
            selectedImageIndex: null,
            isDeleteModalOpen: false,
            isCreateModalOpen: false,
            isEditModalOpen: false,
            isFullScreenImageModalOpen: false,
            image: {
                title: '',
                alt: '',
                src: '',
                liked: false
            },
            user: {
                name: 'Жак-Ив Кусто',
                position: 'Исследователь океана'
            },
            tempUser:{}
        },
        methods: {
            openEditModal() {
                this.tempUser = Object.assign({},this.user);
                this.isEditModalOpen = true;
            },
            closeEditModal(){
                this.isEditModalOpen = false;
                document.body.classList.remove('no-scroll');
            },
            updateUser() {
                this.user = Object.assign({},this.tempUser);
                this.closeEditModal();
            },
            openFullScreenImageModal(image){
                this.image = Object.assign({}, image);
                this.isFullScreenImageModalOpen = true;
                document.body.classList.add('no-scroll');
            },
            closeFullScreenImageModal(){
                this.image.title = '';
                this.image.alt = '';
                this.image.src = '';
                this.isFullScreenImageModalOpen = false;
                document.body.classList.remove('no-scroll');
            },
            addImage(){
                const newImage = {
                    title: this.image.title,
                    alt: this.image.title,
                    src: this.image.src,
                    liked: false
                }

                this.images.unshift(newImage);
                this.image.title = '';
                this.image.alt = '';
                this.image.src = '';
                this.image.liked = false;
                this.closeCreateModal();
            },
            deleteSelectedImage(){
                if(this.selectedImageIndex !== null){
                    this.images.splice(this.selectedImageIndex,1);
                    this.selectedImageIndex = null;
                    this.closeDeleteModal();
                }
            },
            openDeleteModal(index) {
                this.selectedImageIndex = index;
                this.isDeleteModalOpen = true;
                document.body.classList.add('no-scroll');
            },
            closeDeleteModal(){
                this.selectedImageIndex = null;
                this.isDeleteModalOpen = false;
                document.body.classList.remove('no-scroll');
            },
            openCreateModal(){
                this.isCreateModalOpen = true;
                document.body.classList.add('no-scroll');
            },
            closeCreateModal(){
                this.isCreateModalOpen = false;
                document.body.classList.remove('no-scroll');
            }
        }
})