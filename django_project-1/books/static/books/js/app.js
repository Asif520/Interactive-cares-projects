function openDeleteModal(title, pk) {
        document.getElementById('bookTitle').textContent = title;
        document.getElementById('bookPk').value = pk;
        document.getElementById('deleteForm').action = `/book/${pk}/delete/`;
        document.getElementById('deleteModal').style.display = 'flex';
    }

    function closeDeleteModal() {
        document.getElementById('deleteModal').style.display = 'none';
    }

    // Close modal when clicking outside content
    window.onclick = function(event) {
        const modal = document.getElementById('deleteModal');
        if (event.target === modal) {
            closeDeleteModal();
        }
    }