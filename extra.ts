
    //   - run: |
    //       echo "${{ secrets.SSH_PRIVATE_KEY }}" &> ~/ssh_key
    //       chmod 700 /home/runner/ssh_key
    //       ssh -o StrictHostKeyChecking=no -i ~/ssh_key root@64.227.147.124 -t "docker stop user_backend && docker run --name user_backend -d -p 8080:8080 saikat2105/user-app-backend:${{ github.sha }}"


















    // "db:generate":"cd packages/db && npx  prisma generate && cd ../..",